const getMemes = async()=>{
    try{
        const res = await fetch("https://meme-api.herokuapp.com/gimme");
        const data = await res.json();
        const meme = document.querySelector('#meme');
        meme.innerHTML = `<img src=${data.url} alt="meme" width="400px" />`;
    } catch (error) {}
};

window.addEventListener("load", ()=> {
    getMemes();
});