# 🖧 Network Devices API (RESTful API + Docker + CI/CS)

## 📌 Deskripsi Project

Project ini merupakan implementasi **RESTful API sederhana** untuk mengelola data perangkat jaringan (seperti Router, Switch, dan Access Point). API ini dibangun menggunakan **Next.js (App Router)** dan dirancang mengikuti standar RESTful, serta telah terintegrasi penuh dengan:

* 🐳 Docker (Containerization)
* 🔁 Git Workflow (Feature Branch & Conventional Commits)
* 🤖 GitHub Actions (Continuous Integration)
* 🔐 Security Scan (Continuous Security dengan GitLeaks)

API ini mendukung operasi **CRUD (Create, Read, Update, Delete)** dengan format response JSON standar.

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Next.js (App Router)
* Docker & Docker Compose
* Git & GitHub
* GitHub Actions (CI/CS Pipeline)
* GitLeaks (Security Vulnerability Scanner)

---

## 📂 Struktur Project Utama

```text
api-jaringan/
│
├── src/
│   └── app/
│       └── api/
│           └── devices/
│               ├── route.js          # Endpoint GET & POST
│               ├── data.js           # In-memory array (Database sementara)
│               └── [id]/
│                   └── route.js      # Endpoint GET(ID), PUT, DELETE
│
├── .github/workflows/main.yml        # Konfigurasi CI/CS Pipeline
├── Dockerfile                        # Konfigurasi Docker Image
├── docker-compose.yml                # Konfigurasi Docker Container
├── package.json
└── README.md

---

## 🚀 Cara Menjalankan Aplikasi

### 🔹 Menggunakan Docker (Recommended)

```bash
docker compose up --build
```

### 🔹 Tanpa Docker (Local)

```bash
npm install
npm run dev
```

---

## 🌐 Informasi Port

| Keterangan | Port |
| ---------- | ---- |
| Host       | 8080 |
| Container  | 3000 |

Akses API di:

```
http://localhost:8080/api/devices
```

---

## 📡 Endpoint API

### 🔹 1. GET /items

Mengambil semua data barang

### 🔹 2. GET /items/:id

Mengambil data barang berdasarkan ID

### 🔹 3. POST /items

Menambahkan data barang

### 🔹 4. PUT /items/:id

Mengupdate data barang

### 🔹 5. DELETE /items/:id

Menghapus data barang

---

## 📦 Contoh Request & Response

### ✅ Success Response

```json
{
  "status": "OK",
  "message": "Berhasil mengambil data perangkat jaringan",
  "data": {
    "id": "1",
    "name": "Cisco Catalyst 2960",
    "type": "Switch",
    "ip_address": "192.168.1.10",
    "status": "active"
  },
  "errors": null
}
```

### ❌ Error Response

```json
{
  "status": "ERROR",
  "message": "Perangkat tidak ditemukan",
  "data": null,
  "errors": [
    "Not Found"
  ]
}
```

---

## 🧪 Build Testing

Testing dilakukan dengan memastikan aplikasi berhasil dikompilasi tanpa error (Build Check).

Jalankan test build lokal:

```bash
npm run build
```

---

## 🐳 Docker Configuration

### Dockerfile

Menggunakan base image node:20-alpine dengan instruksi:

* WORKDIR
* COPY
* RUN
* EXPOSE
* CMD

### docker-compose.yml

Digunakan untuk menjalankan container dengan perintah:

```bash
docker compose up --build
```

---

## 🔀 Git Workflow

Project ini menggunakan **Feature Branch Workflow**:

* `main` → branch utama (production)
* `develop` → integrasi fitur
* `feat/*` → pengembangan fitur

### ✏️ Conventional Commits

Contoh:

```
feat: membuat endpoint CRUD untuk data perangkat jaringan
build: menambahkan konfigurasi Dockerfile dan docker-compose
fix: menambahkan fetch-depth 0 pada checkout agar gitleaks berfungsi
ci: menambahkan github actions untuk CI dan CS pipeline
```
---

## 🤖 CI/CD (GitHub Actions)

Workflow berada di:

```
.github/workflows/main.yml
```

### 🔹 Proses yang dijalankan:

1. Install dependencies (npm install)
2. Run build check (npm run build)
3. Security scan (gitleaks-action)

### 🔹 Trigger:

* Push
* Pull Request

---

## 🔐 Security Scan

Menggunakan:

```bash
uses: gitleaks/gitleaks-action@v2
```

Untuk memastikan tidak ada token, password, atau kredensial rahasia yang tidak sengaja ter-push ke dalam repository..

---

## 📊 Status CI/CD

CI/CS berjalan otomatis menggunakan GitHub Actions setiap ada perubahan pada repository.

---

## 📌 Catatan

* Data disimpan sementara (in-memory array di data.js), tidak menggunakan database eksternal.
* `node_modules` tidak disertakan dalam repository (sesuai best practice).
* API dirancang sederhana untuk keperluan pembelajaran.

---

## 🎯 Kesimpulan

Project ini berhasil mengimplementasikan:

* RESTful API standar
* Docker containerization
* Git workflow profesional
* CI/CS automation
* Build testing & security scan

Sehingga memenuhi seluruh requirement tugas Proyek Perangkat Lunak 1.