import { NextResponse } from "next/server";
import { devices } from "../data";

// [GET] Mengambil satu perangkat spesifik berdasarkan ID
export async function GET(request, { params }) {
  const { id } = await params; // <-- Tambahkan await di sini
  const device = devices.find((d) => d.id === id);

  if (!device) {
    return NextResponse.json(
      { status: "ERROR", message: "Perangkat tidak ditemukan", data: null, errors: ["Not Found"] },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { status: "OK", message: "Detail perangkat ditemukan", data: device, errors: null },
    { status: 200 }
  );
}

// [PUT] Mengubah data perangkat spesifik
export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const index = devices.findIndex((d) => d.id === id);

  if (index === -1) {
    return NextResponse.json(
      { status: "ERROR", message: "Perangkat tidak ditemukan", data: null, errors: ["Not Found"] },
      { status: 404 }
    );
  }

  // Update data
  devices[index] = { ...devices[index], ...body };

  return NextResponse.json(
    { status: "OK", message: "Perangkat berhasil diupdate", data: devices[index], errors: null },
    { status: 200 }
  );
}

// [DELETE] Menghapus data perangkat
export async function DELETE(request, { params }) {
  const { id } = await params; // <-- Tambahkan await di sini
  const index = devices.findIndex((d) => d.id === id);

  if (index === -1) {
    return NextResponse.json(
      { status: "ERROR", message: "Perangkat tidak ditemukan", data: null, errors: ["Not Found"] },
      { status: 404 }
    );
  }

  // Hapus dari array
  devices.splice(index, 1);

  return NextResponse.json(
    { status: "OK", message: "Perangkat berhasil dihapus", data: null, errors: null },
    { status: 200 }
  );
}