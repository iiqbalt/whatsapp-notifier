import { ConvertPhone, ProcessTemplate } from "./type";

export const convertPhone = ({ phoneNumber, countryCode = "62" }: ConvertPhone) => {
    if (phoneNumber.length <= 9) {
        console.error("Phone number length is not valid")
        return "0"
    }
    if (phoneNumber[0] == "0") {
        return countryCode + phoneNumber.slice(1, phoneNumber.length)
    }
    if (phoneNumber[0] == "+") {
        return phoneNumber.slice(1, phoneNumber.length)
    }
    return phoneNumber
}

export const convertTemplate = ({ template, data, stringVariable = "$" }: ProcessTemplate) => {
    Object.keys(data).forEach((key) => {
        template = template.replace(String(stringVariable + key), data[key])
    })
    return template
}