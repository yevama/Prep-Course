/* eslint-disable no-undef */
const {
    crearUsuario,
	agregarMetodoPrototype,
	agregarStringInvertida,
	crearInstanciaPersona,
	agregarMetodo,
	Persona
} = require('../homework');

xdescribe('crearUsuario()', function() {
	it('should return a user constructor that correctly builds user objects', function() {
		const Usuario = crearUsuario();
		const user = new Usuario({usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });
		expect(user.usuario).toBe('jssamuel');
		expect(user.nombre).toBe('Samuel');
		expect(user.email).toBe('samuel@email.com');
		expect(user.password).toBe('LoveJS');
    	expect(user.saludar()).toBe('Hola, mi nombre es Samuel');
	});
});

xdescribe('agregarMetodoPrototype(Constructor)', function() {
	it('should add the method saludar to the constructor', function() {
		function Test() {
			this.test = true;
		}
		agregarMetodoPrototype(Test);
		const test = new Test();
		expect(test.saludar()).toBe('Hello World!');
	});
});

xdescribe('agregarStringInvertida(StringPrototype)', function(){
	it('should add a reverse string method to the String prototype that returns a reversed version of the string', function() {
		agregarStringInvertida();
		const str = 'Hello';
		expect(str.reverse()).toBe('olleH');
	});
});

xdescribe('crearInstanciaPersona()', function() {
	it('should return a new instance of Persona', function() {
		expect(crearInstanciaPersona("Juan", "Pérez", 22, "Saavedra 123")).toBeInstanceOf(Persona);
	});
});

xdescribe('agregarMetodo(Persona)', function() {
	it('should add the method datos to the constructor', function() {
		agregarMetodo();
		const persona = new Persona("Juan", "Pérez", 22, "Saavedra 123");
		expect(persona.datos()).toBe('Juan, 22 años');
	});
});

