import { NextResponse } from "next/server";
import { devices } from "./data";

// [GET] Mengambil semua data perangkat
export async function GET() {
  return NextResponse.json(
    {
      status: "OK",
      message: "Berhasil mengambil data perangkat jaringan",
      data: devices,
      errors: null
    },
    { status: 200 }
  );
}

// [POST] Menambahkan perangkat baru
export async function POST(request) {
  try {
    // Membaca body request (JSON) yang dikirim client
    const body = await request.json();
    
    const newDevice = {
      id: Date.now().toString(), // Bikin ID acak pakai waktu
      name: body.name,
      type: body.type,
      ip_address: body.ip_address,
      status: body.status || "active"
    };

    devices.push(newDevice);

    return NextResponse.json(
      {
        status: "OK",
        message: "Perangkat berhasil ditambahkan",
        data: newDevice,
        errors: null
      },
      { status: 201 } 
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "ERROR",
        message: "Gagal menambahkan perangkat",
        data: null,
        errors: ["Format request tidak valid"]
      },
      { status: 400 } 
    );
  }
}