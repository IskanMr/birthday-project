# KP Diskominfo

## Clone Repo
### `git clone https://github.com/IskanMr/kp-diskominfo.git`

## install dependencies
### `npm install`

## menjalankan web
### `npm run start`

## struktur direktori

- file utama adalah `app.js` 
- tiap laman memiliki file tersendiri di direktori `src/Pages` dan di export ke `app.js
- setiap section atau komponen lainnya yang digunakan di masing-masing laman menempati direktori tersendiri di `src/Components/<nama laman>` dan di export menggunakan barrel file yang ada di masing-masing direktori
- satu file hanya digunakan untuk satu komponen
- component yang akan ada di setiap laman seperti Navbar dan Footer ditempatkan di directory `src/Components`
- file javascript yang memuat kompenen menggunakan ekstensi `.jsx` dan diberi nama dengan PascalCase sedangkan file javascript yang tidak memuat komponen menggunakan ekstensi `js` dan diberi nama dengan camelCase
- nama file diharapkan dapat menjelaskan isi dari file tersebut. hindari penggunaan nama file seperti `Section1.jsx`

## commit
### `git commit -m <commit message>`
saran penulisan commit message:
- satu commit hanya untuk perubahan di satu page 
- commit message mengandung nama laman yang diubah
- commit message dapat menjelaskan apa yang diubah di commit tersebut
- menggunakan kata kerja
- mengandung keterangan apakah commit tersebut untuk penambahan bagian (new) atau memperbaiki kesalahan (fix)

- saran format: `<keterangan>(<page yang diubah>): <perubahan yang dibuat>`
- contoh: 
`new(Homepage): add timeline section`
`fix(Standins): change background color`

## checkout (Pindah Branch)
### `git checkout <branch name>`

## pull
### `git pull origin <branch name>`

## push 
### `git push origin <branch name>`

## panduan gaya penulisan kode 
### [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/)


