const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '56cd2bc854f7572d399bf1863debee07',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;