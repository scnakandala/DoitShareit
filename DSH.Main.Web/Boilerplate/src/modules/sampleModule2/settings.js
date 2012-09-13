
define(['path!../../../server/'], function(serverPath) {
	return {
		urls : {
			empimages : serverPath + "{empid}.png",
			empdetails : serverPath + "{empid}.txt",
			yearlysales : serverPath + "yearly-sales.txt",
			//employees: serverPath + "employees.txt"
			employees: "http://localhost:49357/REST/GetEmployee"
		}
	}
});
