System.register([], function (exports_1, context_1) {
    "use strict";
    var Livro;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Livro = class Livro {
                constructor(_titulo, _autor, _editora, _ano) {
                    this._titulo = _titulo;
                    this._autor = _autor;
                    this._editora = _editora;
                    this._ano = _ano;
                }
                get titulo() {
                    return this._titulo;
                }
                get autor() {
                    return this._autor;
                }
                get editora() {
                    return this._editora;
                }
                get ano() {
                    return this._ano;
                }
            };
            exports_1("Livro", Livro);
        }
    };
});
