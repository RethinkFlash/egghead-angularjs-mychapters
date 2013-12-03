/**
 * Created by kennethmalley on 12/2/13.
 */

/** remember to add documentation to your code!
 *  visit https://code.google.com/p/jsdoc-toolkit/w/list
 *  for how to use @params, @return, etc.
 *  Also remember to create a .jshintrc file in the root directory
 */

var myApp = angular.module('myApp',[]);
myApp.factory('Avengers', function() {
	var Avengers = {};
	Avengers.cast =
		[
		{
			"name": "Cullen Delacruz",
			"email": "lobortis.quis.pede@enim.edu"
		},
		{
			"name": "Robert Bradshaw",
			"email": "malesuada.fringilla.est@semut.com"
		},
		{
			"name": "Marshall Bradford",
			"email": "Quisque@vitae.com"
		},
		{
			"name": "Kelly Combs",
			"email": "eleifend.nec.malesuada@ac.com"
		},
		{
			"name": "Thaddeus Turner",
			"email": "tempor.diam.dictum@Vestibulum.edu"
		},
		{
			"name": "Clark Brady",
			"email": "pede@egestas.org"
		},
		{
			"name": "Nathan Bailey",
			"email": "urna.Vivamus@ligula.org"
		},
		{
			"name": "Emery Lewis",
			"email": "massa.Vestibulum@Aeneanegestashendrerit.edu"
		},
		{
			"name": "Samuel Hopkins",
			"email": "Donec@eratEtiam.co.uk"
		},
		{
			"name": "Jack Mcdonald",
			"email": "nisi.nibh.lacinia@vitaenibhDonec.net"
		},
		{
			"name": "Stuart Dorsey",
			"email": "ante@nunc.co.uk"
		},
		{
			"name": "George Le",
			"email": "luctus.et@mauris.ca"
		},
		{
			"name": "Quinn Huff",
			"email": "vel.faucibus.id@liberoduinec.org"
		},
		{
			"name": "Cyrus Atkinson",
			"email": "scelerisque@malesuadaut.org"
		},
		{
			"name": "Dorian Gallegos",
			"email": "vulputate@disparturient.net"
		},
		{
			"name": "Sawyer Blevins",
			"email": "nisl.sem.consequat@sedfacilisis.co.uk"
		},
		{
			"name": "Mark Ayala",
			"email": "eu.tellus@ultriciesdignissim.edu"
		},
		{
			"name": "Gage Gonzales",
			"email": "augue.eu@etmagnis.org"
		},
		{
			"name": "Yoshio Spence",
			"email": "Nunc.mauris.Morbi@euismod.org"
		},
		{
			"name": "Patrick Frederick",
			"email": "faucibus@Aliquamtincidunt.co.uk"
		},
		{
			"name": "Zephania Winters",
			"email": "ante.blandit.viverra@sed.edu"
		},
		{
			"name": "Isaiah Robertson",
			"email": "vel@eu.org"
		},
		{
			"name": "Jakeem Gallagher",
			"email": "aliquet.molestie.tellus@fermentum.net"
		},
		{
			"name": "Fulton Morales",
			"email": "non@nuncrisusvarius.net"
		},
		{
			"name": "Ethan Gould",
			"email": "ac.libero@turpisNulla.edu"
		},
		{
			"name": "Erich Schultz",
			"email": "ultrices@auctornon.net"
		},
		{
			"name": "Oleg Weaver",
			"email": "Fusce@convallis.net"
		},
		{
			"name": "Hiram Olsen",
			"email": "a.feugiat@arcu.co.uk"
		},
		{
			"name": "Declan Cannon",
			"email": "pretium.aliquet.metus@hymenaeosMauris.co.uk"
		},
		{
			"name": "Roth Nelson",
			"email": "Maecenas.libero.est@Fuscealiquet.co.uk"
		},
		{
			"name": "Beau Hampton",
			"email": "porta.elit.a@magna.edu"
		},
		{
			"name": "Lamar Sweet",
			"email": "habitant.morbi.tristique@hymenaeosMauris.co.uk"
		},
		{
			"name": "Thomas William",
			"email": "vulputate.eu.odio@dapibus.net"
		},
		{
			"name": "Lance Sanchez",
			"email": "diam.vel.arcu@estarcu.ca"
		},
		{
			"name": "William Robbins",
			"email": "facilisis.vitae@pharetra.co.uk"
		},
		{
			"name": "Ivan Carson",
			"email": "arcu.Vivamus.sit@vitae.edu"
		},
		{
			"name": "Lawrence Adams",
			"email": "amet@inconsectetueripsum.net"
		},
		{
			"name": "Baxter Howell",
			"email": "velit.in@in.edu"
		},
		{
			"name": "Oliver Wall",
			"email": "in.aliquet.lobortis@atvelitPellentesque.net"
		},
		{
			"name": "Steven Moon",
			"email": "a.felis@quislectusNullam.org"
		},
		{
			"name": "Ross Gay",
			"email": "vel.est@sitamet.co.uk"
		},
		{
			"name": "Eagan Mayo",
			"email": "urna.justo@Nam.edu"
		},
		{
			"name": "Dieter Gomez",
			"email": "convallis@dolor.net"
		},
		{
			"name": "Zane George",
			"email": "magna.malesuada@vitaeodiosagittis.com"
		},
		{
			"name": "Paul Pierce",
			"email": "in.hendrerit.consectetuer@iaculis.edu"
		},
		{
			"name": "George Whitfield",
			"email": "semper.pretium.neque@egettincidunt.edu"
		},
		{
			"name": "Keane Prince",
			"email": "neque@ante.co.uk"
		},
		{
			"name": "Fulton Howe",
			"email": "lorem.auctor@arcuVivamussit.com"
		},
		{
			"name": "Palmer Dawson",
			"email": "sit.amet@loremvitaeodio.edu"
		},
		{
			"name": "Addison Hinton",
			"email": "massa@eratSed.edu"
		},
		{
			"name": "Uriah Phillips",
			"email": "purus@auctorodio.org"
		},
		{
			"name": "Kareem Vargas",
			"email": "velit@malesuadafames.com"
		},
		{
			"name": "Cade Waters",
			"email": "in.consectetuer@nec.org"
		},
		{
			"name": "Brent Brooks",
			"email": "enim.Suspendisse@atiaculis.ca"
		},
		{
			"name": "Tyler Puckett",
			"email": "senectus.et.netus@etnunc.org"
		},
		{
			"name": "Vaughan Guerrero",
			"email": "semper.dui.lectus@Suspendisse.org"
		},
		{
			"name": "Malachi Rosa",
			"email": "elit.fermentum.risus@consequatnecmollis.net"
		},
		{
			"name": "Troy Dalton",
			"email": "sapien@nascetur.com"
		},
		{
			"name": "Seth Fischer",
			"email": "ligula.Donec.luctus@non.ca"
		},
		{
			"name": "Jamal Gibson",
			"email": "diam.vel.arcu@semmagnanec.co.uk"
		},
		{
			"name": "Zeph Melendez",
			"email": "eget.magna@utnisi.org"
		},
		{
			"name": "Burton Fuller",
			"email": "Pellentesque@auctornon.edu"
		},
		{
			"name": "Slade West",
			"email": "pharetra@a.org"
		},
		{
			"name": "Dennis Ingram",
			"email": "a@tinciduntaliquamarcu.com"
		},
		{
			"name": "Jared Ray",
			"email": "Fusce@etrutrum.edu"
		},
		{
			"name": "Prescott Mccarthy",
			"email": "Aliquam.tincidunt@pellentesquetellussem.co.uk"
		},
		{
			"name": "Harrison Briggs",
			"email": "lectus@neque.edu"
		},
		{
			"name": "Duncan Holden",
			"email": "et.magna@Duiscursusdiam.org"
		},
		{
			"name": "Myles Pace",
			"email": "nonummy.ut@eratvel.net"
		},
		{
			"name": "Rigel Dillon",
			"email": "Etiam.imperdiet.dictum@tortornibhsit.ca"
		},
		{
			"name": "Nissim England",
			"email": "quis.turpis@enimEtiam.org"
		},
		{
			"name": "Harding Wise",
			"email": "pede.blandit@vitaealiquet.com"
		},
		{
			"name": "Dustin Mcdonald",
			"email": "adipiscing.lacus.Ut@egestas.com"
		},
		{
			"name": "Omar Anderson",
			"email": "mattis.Cras.eget@elit.edu"
		},
		{
			"name": "Avram Eaton",
			"email": "fringilla.mi@Praesenteu.co.uk"
		},
		{
			"name": "Thor Ray",
			"email": "parturient.montes@aultriciesadipiscing.edu"
		},
		{
			"name": "Burke Snyder",
			"email": "Sed.auctor@Naminterdum.org"
		},
		{
			"name": "Oleg Griffin",
			"email": "lorem.ipsum.sodales@tellusfaucibus.edu"
		},
		{
			"name": "Logan Harmon",
			"email": "quam@aliquamiaculis.ca"
		},
		{
			"name": "Castor Abbott",
			"email": "Aliquam.ultrices@adipiscingenimmi.org"
		},
		{
			"name": "Ishmael Richards",
			"email": "mauris.id@Aliquamerat.edu"
		},
		{
			"name": "Ashton Wells",
			"email": "ornare.elit@ultrices.com"
		},
		{
			"name": "Nasim Shannon",
			"email": "libero@tellus.edu"
		},
		{
			"name": "Stone Gallegos",
			"email": "accumsan.sed@quam.edu"
		},
		{
			"name": "Austin Vega",
			"email": "Mauris.magna@tinciduntvehicularisus.com"
		},
		{
			"name": "Eaton Travis",
			"email": "Quisque@aliquamiaculislacus.com"
		},
		{
			"name": "Chadwick Best",
			"email": "pede.et@amagnaLorem.com"
		},
		{
			"name": "Brenden Ellis",
			"email": "dui@etmalesuada.edu"
		},
		{
			"name": "Travis Sykes",
			"email": "consectetuer@laciniaSedcongue.ca"
		},
		{
			"name": "Jameson Roberson",
			"email": "sem.Pellentesque.ut@eueratsemper.com"
		},
		{
			"name": "Julian Stevens",
			"email": "tincidunt.Donec@nuncsitamet.ca"
		},
		{
			"name": "Scott Mueller",
			"email": "odio.auctor.vitae@vitaeodiosagittis.co.uk"
		},
		{
			"name": "Jared Wise",
			"email": "magna@nonummyFuscefermentum.org"
		},
		{
			"name": "Micah Wilder",
			"email": "felis.Nulla.tempor@pretiumnequeMorbi.edu"
		},
		{
			"name": "Harlan Ramirez",
			"email": "non@bibendumullamcorper.net"
		},
		{
			"name": "Kato Joyner",
			"email": "leo.Cras@sem.org"
		},
		{
			"name": "Aquila Frye",
			"email": "cursus.vestibulum@Nullam.co.uk"
		},
		{
			"name": "Calvin Medina",
			"email": "fringilla.cursus@ultriciesdignissim.edu"
		},
		{
			"name": "Elvis Bender",
			"email": "semper@imperdietornareIn.net"
		},
		{
			"name": "Hamish Sutton",
			"email": "eget.laoreet@duiin.org"
		}
	];

	return Avengers;
})

function AvengersCtrl($scope, Avengers) {
	$scope.Avengers = Avengers;
}