$(document).ready(function(){
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page == "profile.html"){
		var row = $("<tbody>");
		row.append($("<tr><td><b>Nama</b></td><td>"+ dataprofile.profile.Nama +"</td></tr>"));
		row.append($("<tr><td><b>Tempat Tanggal Lahir</b></td><td>"+ dataprofile.profile.TTL +"</td></tr>"));
		row.append($("<tr><td><b>Jenis Kelamin</b></td><td>"+ dataprofile.profile.Gender +"</td></tr>"));
		row.append($("<tr><td><b>Alamat</b></td><td>"+ dataprofile.profile.Alamat +"</td></tr>"));
		row.append($("<tr><td><b>Agama</b></td><td>"+ dataprofile.profile.Agama +"</td></tr>"));
		row.append($("<tr><td><b>Golongan Darah</b></td><td>"+ dataprofile.profile.GolDar +"</td></tr>"));
		row.append($("<tr><td><b>Status</b></td><td>"+ dataprofile.profile.Status +"</td></tr>"));
		row.append($("<tr><td><b>Pekerjaan</b></td><td>"+ dataprofile.profile.Pekerjaan +"</td></tr>"));
		row.append($("<tr><td><b>Kewarganegaraan</b></td><td>"+ dataprofile.profile.Kewarganegaraan +"</td></tr>"));
		row.append($("</tbody>"))
		$("#table-profile").append(row);
		
		row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Nama Sekolah</th>"));
		row.append($("<th>Tahun Lulus</th>"));
		row.append($("<th>Jurusan</th>"));
		row.append($("</tr></thead>"));
		row.append($("<tbody>"));
		for(i = 0;i < dataprofile.schools.length;i++){
			row.append($("<tr>"));
			for(j = 0; j <dataprofile.schools[i].SD.length;j++){
				row.append($("<td>"+dataprofile.schools[i].SD[j]+"</td>"));
			}
			row.append($("</tr>"));
			row.append($("<tr>"));
			for(j = 0; j <dataprofile.schools[i].SMP.length;j++){
				row.append($("<td>"+dataprofile.schools[i].SMP[j]+"</td>"));
			}
			row.append($("</tr>"));
			row.append($("<tr>"));
			for(j = 0; j <dataprofile.schools[i].SMA.length;j++){
				row.append($("<td>"+dataprofile.schools[i].SMA[j]+"</td>"));
			}
			row.append($("</tr>"));
			row.append($("<tr>"));
			for(j = 0; j <dataprofile.schools[i].KULIAH.length;j++){
				row.append($("<td>"+dataprofile.schools[i].KULIAH[j]+"</td>"));
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"));
		$("#table-education").append(row);
	}
	else if(page == "experience.html"){
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Perusahaan</th>"));
		row.append($("<th>Status</th>"));
		row.append($("<th>Lama Kerja</th>"));
		row.append($("<th>Project</th>"));
		row.append($("<th>Keterangan</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < dataexperience.pengalaman.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < dataexperience.pengalaman[i].length;j++){
				row.append($("<td>"+dataexperience.pengalaman[i][j]+"</td>"));
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-job-experience").append(row);
		
		row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Kemampuan</th>"));
		row.append($("<th>Lama Penggunaan</th>"));
		row.append($("<th>Skor(1 - 10)</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < dataexperience.skill.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < dataexperience.skill[i].length;j++){
				row.append($("<td>"+dataexperience.skill[i][j]+"</td>"));
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-skill").append(row);
	}
	else if(page == "musics.html"){
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Judul</th>"));
		row.append($("<th>Artis</th>"));
		row.append($("<th>Play</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < musics.genre.indie.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < musics.genre.indie[i].length;j++){
				if(j != 2)
					row.append($("<td>"+musics.genre.indie[i][j]+"</td>"));
				else
					row.append($("<td><button id=\"btn-play-"+i+"\" class=\"btn\" data-href=\""+musics.genre.indie[i][j]+"\" onclick=\"onClickPlay(this);\"><i class=\"fa fa-play\"></i></button></td>"))
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-music").append(row);
	}
})

function onAppendHeaderTable(idtable){
	var row = $("<thead><tr>");
	$.each(data,function(key, value){
		row.append($("<th>"+key+"</th>"));
	});
	row.append($("</tr></thead>"));
	$("#" + idtable).append(row);
}
function onAppendDataTable(data, idtable){
	var row = $("<tbody><tr>");
	$.each(data,function(key, value){
		row.append($("<th>"+key+"</th>"));
	});
	row.append($("</tr></tbody>"));
	$("#" + idtable).append(row);
}
function onAppendTable(){
	onAppendHeaderTable();
	onAppendDataTable();
}
function onClickGenreMusicButton(e){
	var buttonname = $(e).find('small').text();
	if(buttonname == "Indie"){
		$("#table-music thead").remove();
		$("#table-music tbody").remove();
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Judul</th>"));
		row.append($("<th>Artis</th>"));
		row.append($("<th>Play</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < musics.genre.indie.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < musics.genre.indie[i].length;j++){
				if(j != 2)
					row.append($("<td>"+musics.genre.indie[i][j]+"</td>"));
				else
					row.append($("<td><button id=\"btn-play-"+i+"\" class=\"btn\" data-href=\""+musics.genre.indie[i][j]+"\" onclick=\"onClickPlay(this);\"><i class=\"fa fa-play\"></i></button></td>"))
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-music").append(row);
	}
	else if(buttonname == "Pop"){
		$("#table-music thead").remove();
		$("#table-music tbody").remove();
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Judul</th>"));
		row.append($("<th>Artis</th>"));
		row.append($("<th>Play</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < musics.genre.pop.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < musics.genre.pop[i].length;j++){
				if(j != 2)
					row.append($("<td>"+musics.genre.pop[i][j]+"</td>"));
				else
					row.append($("<td><button id=\"btn-play-"+i+"\" class=\"btn\" data-href=\""+musics.genre.pop[i][j]+"\" onclick=\"onClickPlay(this);\"><i class=\"fa fa-play\"></i></button></td>"))
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-music").append(row);
	}
	else if(buttonname == "Jazz"){
		$("#table-music thead").remove();
		$("#table-music tbody").remove();
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Judul</th>"));
		row.append($("<th>Artis</th>"));
		row.append($("<th>Play</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < musics.genre.jazz.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < musics.genre.jazz[i].length;j++){
				if(j != 2)
					row.append($("<td>"+musics.genre.jazz[i][j]+"</td>"));
				else
					row.append($("<td><button id=\"btn-play-"+i+"\" class=\"btn\" data-href=\""+musics.genre.jazz[i][j]+"\" onclick=\"onClickPlay(this);\"><i class=\"fa fa-play\"></i></button></td>"))
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-music").append(row);
	}
	else if(buttonname == "Rock"){
		$("#table-music thead").remove();
		$("#table-music tbody").remove();
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Judul</th>"));
		row.append($("<th>Artis</th>"));
		row.append($("<th>Play</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < musics.genre.rock.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < musics.genre.rock[i].length;j++){
				if(j != 2)
					row.append($("<td>"+musics.genre.rock[i][j]+"</td>"));
				else
					row.append($("<td><button id=\"btn-play-"+i+"\" class=\"btn\" data-href=\""+musics.genre.rock[i][j]+"\" onclick=\"onClickPlay(this);\"><i class=\"fa fa-play\"></i></button></td>"))
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-music").append(row);
	}
	else if(buttonname == "Koplo"){
		$("#table-music thead").remove();
		$("#table-music tbody").remove();
		var row = $("<thead><tr>");
		row.append($("<th>No.</th>"));
		row.append($("<th>Judul</th>"));
		row.append($("<th>Artis</th>"));
		row.append($("<th>Play</th>"));
		row.append($("</tr></thead>"));
		
		row.append($("<tbody>"));
		for(i = 0;i < musics.genre.koplo.length;i++){
			row.append($("<tr>"));
			row.append($("<td>"+(parseInt(i) + 1)+"</td>"));
			for(j = 0;j < musics.genre.koplo[i].length;j++){
				if(j != 2)
					row.append($("<td>"+musics.genre.koplo[i][j]+"</td>"));
				else
					row.append($("<td><button id=\"btn-play-"+i+"\" class=\"btn\" data-href=\""+musics.genre.koplo[i][j]+"\" onclick=\"onClickPlay(this);\"><i class=\"fa fa-play\"></i></button></td>"))
			}
			row.append($("</tr>"));
		}
		row.append($("</tbody>"))
		$("#table-music").append(row);
	}
}

function onClickPlay(e){
	var idx = e.id;
	var eserce = e.getAttribute('data-href');
	var iframes = "<iframe id=\"ytplayer\" type=\"text/html\" width=\"225\" src=\""+eserce+"?autoplay=1\" frameborder=\"0\" autoplay allow=\"accelerometer; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
	$("[id^=btn-play-]").find("i").removeClass("fa-stop");
	$("[id^=btn-play-]").find("i").addClass("fa-play");
	$("#"+idx+"").find("i").removeClass("fa-stop");
	$("#"+idx+"").find("i").addClass("fa-stop");
	$("#play-video iframe").remove();
	$("#play-video").append($(iframes));
	
	$('html,body').animate({
       scrollTop: $("#play-video").offset().top
    }, 'slow');
}
