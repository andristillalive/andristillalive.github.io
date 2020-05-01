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
		
	}
	else if(page == ""){
		
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