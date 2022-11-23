export interface ConvertPhone {
    phoneNumber: string,
    countryCode?: string
}
export interface ProcessTemplate {
    template: string
    data: any,
    stringVariable?: any
}