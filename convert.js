function setup() {
    let userinput = select('#userinput')
    userinput.input(changeText)

    function changeText() {
        let message = userinput.value()
    }
}