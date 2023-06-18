const restartButton = document.querySelector('.button-restart')
restartButton.setAttribute('style', 'display: none')
const userRequest = document.querySelector('.input-text')
const imagePH = document.querySelector('.placeholder-image-png')
const userName = document.querySelector('.title-text')
const divSearchArea = document.querySelector('.search-area')

async function BuscarDadosGitHub()
{
    
    try
    {
        const userRequestName = userRequest.value

        console.log(userRequestName)

        if (userRequestName)
        {
            const response = await fetch(`https://api.github.com/users/${userRequestName}`)
            const body = await response.json()
            const foto = body.avatar_url
            const nome = body.name

        
            if (response.status === 404)
            {
                    window.alert('{ERRO!} Usúario não encontrado.')
                    location.reload(true)
            } else
            {
                    MudarDados(foto, nome)
            }    
        } else
        {
            window.alert('{ERRO!} Digite o nome de usúario.')
    }}

    catch (erro)
    {
        window.alert('{ERRO!} Sistema fora do ar.')}}

function MudarDados(foto, nome)
{
    

    imagePH.setAttribute('src', foto)
    userName.innerHTML = nome
    divSearchArea.setAttribute('style', 'display: none')
    restartButton.setAttribute('style', 'display: block')
}

function ResetDados()
{
    location.reload(true)
    restartButton.setAttribute('style', 'display: none')
    userName.innerHTML = "GitHub Profile Finder"
    divSearchArea.setAttribute('style', 'display: show')
    imagePH.setAttribute('src', "assets/placeholder-Image.png")
}










function menuChanger() {
    const menuicon = document.querySelector('.menu-icon')
}