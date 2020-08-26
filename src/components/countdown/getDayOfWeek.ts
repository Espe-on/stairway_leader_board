const daysUntilSunday: Function = () => {
    const today: number = (new Date().getDay())
    switch (today) {
        case 0:
            return 0;
        default:
            return 7 - today
    }

}

export default daysUntilSunday