function sound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('playing')
    if (audio.currentTime = 0) {
        key.classList.remove('playing')
    }
}
function removeTransition(e) {
    if (e.propertyName === 'transition') return;
    e.target.classList.remove('playing')

}
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', sound)
