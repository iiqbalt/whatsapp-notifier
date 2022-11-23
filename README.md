# whatsapp-notifier
Whatsapp notifier service

### Convert Phone
```typescript
let phoneNumber:string = "08123456789"
let result = convertPhone({ phoneNumber })
console.log(result)

/** result : 
628123456789
**/
```

### Convert Template
```typescript
let template: string = `
Selamat siang,
Semoga sehat selalu , selamat Sdri ($nama) lolos dalam seleksi administrasi pendaftaran di $perusahaan, Maka Dari itu kami mengudang sodari untuk datang dan mengsisi kehadiran.`
let data: any = {
    nama: "Iqbal",
    perusahaan: "Arkana Technology"
}

let result = convertTemplate({ template, data})
console.log(result)

/** result : 
Selamat siang, 
Semoga sehat selalu , selamat Sdri (Iqbal) lolos dalam seleksi administrasi pendaftaran di Arkana Technology, Maka Dari itu kami mengudang sodari untuk datang dan mengsisi kehadiran. 
**/
```
