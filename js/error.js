
export const AlertError = {
    alert: document.querySelector('.error'),
    activeAlert(){
        this.alert.classList.remove('desativar');
    },
    desableAlert(){
        this.alert.classList.add('desativar');
    }
}