import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/banco.js';

import '../imports/banco.js';

import './main.html';

var img_data = [
        {
		src: "images/portfolio/a_origem.jpg",
        genre: "Sci-fi",
          },
		{
       	src: "images/portfolio/alien.jpg",
        genre: "Terror",
          },
        {
       	src: "images/portfolio/anchorman.jpg",
        genre: "Comédia",
          },
        {
        src: "images/portfolio/animais_noturnos.jpg",
        genre: "Drama",
          },
        {
       	src: "images/portfolio/bela.jpg",
        genre: "Musical",
          },
        {
       	src: "images/portfolio/big_lebowski.jpg",
        genre: "Comédia",
          },
        {
       	src: "images/portfolio/blackfish.jpg",
        genre: "Documentário",
          },
        {
       	src: "images/portfolio/cartas.jpg",
        genre: "Romance",
          },
        {
       	src: "images/portfolio/circulo.jpg",
        genre: "Guerra",
          },
        {
       	src: "images/portfolio/colateral.jpg",
        genre: "Crime",
          },
        {
       	src: "images/portfolio/daytraining.jpg",
        genre: "Crime",
          },
        {
       	src: "images/portfolio/django.jpg",
        genre: "Cult",
          },
		{
       	src: "images/portfolio/donnie.jpg",
        genre: "Drama",
          },
		{
		src: "images/portfolio/eternal.jpg",
        genre: "Romance",
          },
		{
		src: "images/portfolio/farenheit.jpg",
        genre: "Documentário",
          },
		{
		src: "images/portfolio/fenomenos.jpg",
        genre: "Terror",
          },
		{
		src: "images/portfolio/fury.jpg",
        genre: "Guerra",
          },
		{
		src: "images/portfolio/guardioes.jpg",
        genre: "Aventura",
          },
		{
		src: "images/portfolio/trovao_tropical.jpg",
        genre: "Comédia",
          },
		{
		src: "images/portfolio/high.jpg",
        genre: "Musical",
          },
		{
		src: "images/portfolio/invocação.jpg",
        genre: "Terror",
          },
		{
		src: "images/portfolio/john.jpg",
        genre: "Romance",
          },
		{
		src: "images/portfolio/lalaland.jpg",
        genre: "Musical",
          },
		{
		src: "images/portfolio/matrix.jpg",
        genre: "Sci-fi",
          },
		{
		src: "images/portfolio/maze.jpg",
        genre: "Aventura",
          },
		{
		src: "images/portfolio/MI3.jpg",
        genre: "Ação",
          },
		{
		src: "images/portfolio/piratas.jpg",
        genre: "Aventura",
          },
		{
		src: "images/portfolio/pulp.jpg",
        genre: "Cult",
          },
		{
		src: "images/portfolio/reisdarua.jpg",
        genre: "Crime",
          },
		{
		src: "images/portfolio/scarface.jpg",
        genre: "Ação",
          },
		{
		src: "images/portfolio/reservoir.jpg",
        genre: "Cult",
          },
		{
		src: "images/portfolio/rota_de_fuga.jpg",
        genre: "Ação",
          },
		{
		src: "images/portfolio/snowden.jpg",
        genre: "Documentário",
          },
		{
		src: "images/portfolio/star_wars.jpg",
        genre: "Sci-fi",
          },
		{
		src: "images/portfolio/taxi.jpg",
        genre: "Drama",
          },
		{
		src: "images/portfolio/trovao_tropical.jpg",
        genre: "Comédia",
          },
       	
];

Template.filmes.helpers({filmes_colecao:img_data});

//Template.filmes.helpers({filmes_colecao:Images.find()});

/*Template.janela_cadastro.events({
    'submit #form_cadastro': function(event){
			Images.insert({src: $("#id_url").val(), title: $("#id_title").val(), genre: $("#id_genre").val(), created: new Date()});
	 		return false;//comando para n recarregar página
   		 }
});*/

Template.filmes.events({
 'click .avalia_imagem': function(event) {
       var num_estrelas = $(event.currentTarget).data("userrating");
       var image_id = this.image_id; //aqui, this se refere ao template que foi incluido
	   Images.update({_id:image_id}, {$set: {stars: num_estrelas}});
   },
});