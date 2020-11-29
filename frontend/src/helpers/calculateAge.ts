function calculateAge(birthday: string) { // day/month/year
    const birth = birthday.split("/")
    const birthDay = new Date(
      parseInt(birth[2], 10),
      parseInt(birth[1], 10) - 1,
      parseInt(birth[0], 10),
    )

    const difference = Date.now() -  birthDay.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970)
}

export default calculateAge
