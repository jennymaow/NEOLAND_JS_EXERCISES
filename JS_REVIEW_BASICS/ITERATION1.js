const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];


/* for (movie of movies){
    const categoriesMovies = [...movie.categories];
    console.log (categoriesMovies);
} */

const categoriesMovies1= movies.map(category=>category.categories);
console.log (categoriesMovies1); 

const categoriesMovies = categoriesMovies1.join();
console.log (categoriesMovies);

