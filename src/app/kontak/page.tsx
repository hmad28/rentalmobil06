import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ExternalLink } from "lucide-react";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hubungi Kami - Zahraffa Rental Mobil Banjarmasin",
  description: "Hubungi Home Zahraffa Rental Mobil Banjarmasin & Banjarbaru untuk reservasi, konsultasi rute, dan sewa mobil 24 jam via WhatsApp dan telepon.",
};

export default function KontakPage() {
  return (
    <main className="pt-20 bg-[#FBFAF7] min-h-screen">
      {/* Header Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F4EFE6] to-[#FBFAF7] border-b border-[#E8E4DB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#B8892E] uppercase font-cinzel mb-2">
            Layanan Siaga 24 Jam
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight mb-4">
            Hubungi <span className="text-[#B8892E]">ZAHRAFFAMIRA</span> Rental
          </h1>
          <p className="text-sm sm:text-base text-[#626262] max-w-2xl mx-auto leading-relaxed">
            Tim kami siap melayani pertanyaan tarif, cek ketersediaan armada, konsultasi jadwal perjalanan, hingga penjemputan bandara kapan pun Anda butuhkan.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs space-y-5">
                <h2 className="text-xl font-bold text-[#171717] pb-3 border-b border-[#F0ECE1]">
                  Informasi Kontak
                </h2>

                {/* Alamat */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#171717]">Alamat Garasi</h3>
                    <p className="text-xs sm:text-sm text-[#626262] mt-0.5 leading-relaxed">
                      Komplek Dinar Mas 2 Blok AB No. 13 D, Kayu Bawang, Kec. Gambut, Kab. Banjar, Kalimantan Selatan 70652
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#171717]">Telepon / WhatsApp</h3>
                    <a
                      href="tel:6285349166234"
                      className="text-xs sm:text-sm text-[#B8892E] hover:text-[#9E7424] font-semibold mt-0.5 block hover:underline"
                    >
                      +62 853-4916-6234
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#171717]">Email Resmi</h3>
                    <a
                      href="mailto:info@zahraffamirarental.com"
                      className="text-xs sm:text-sm text-[#626262] hover:text-[#B8892E] mt-0.5 block hover:underline"
                    >
                      info@zahraffamirarental.com
                    </a>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#B8892E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#171717]">Jam Operasional</h3>
                    <p className="text-xs sm:text-sm text-[#626262] mt-0.5">
                      Buka 24 Jam Setiap Hari (Termasuk Hari Libur & Tanggal Merah)
                    </p>
                  </div>
                </div>
              </div>

              {/* Media Sosial & Saluran Resmi */}
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 shadow-xs">
                <h3 className="text-base font-bold text-[#171717] pb-3 mb-4 border-b border-[#F0ECE1]">
                  Media Sosial Resmi
                </h3>
                <div className="space-y-3">
                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/6285349166234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-[#E8E4DB] hover:border-[#25D366] hover:bg-emerald-50/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 fill-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#171717] group-hover:text-emerald-700">WhatsApp</p>
                        <p className="text-xs text-[#626262]">+62 853-4916-6234</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#25D366] font-semibold">Chat Sekarang &rarr;</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sewa_haice_commuter_gambut_bjm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-[#E8E4DB] hover:border-pink-500 hover:bg-pink-50/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                        <InstagramIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#171717] group-hover:text-rose-700">Instagram</p>
                        <p className="text-xs text-[#626262]">@sewa_haice_commuter_gambut_bjm</p>
                      </div>
                    </div>
                    <span className="text-xs text-rose-600 font-semibold">Kunjungi &rarr;</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@sewa_haice_commut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-[#E8E4DB] hover:border-black hover:bg-neutral-50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#171717] text-white flex items-center justify-center">
                        <TikTokIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#171717] group-hover:text-black">TikTok</p>
                        <p className="text-xs text-[#626262]">@sewa_haice_commut</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#171717] font-semibold">Kunjungi &rarr;</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1JpX3qfg3T/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-[#E8E4DB] hover:border-[#1877F2] hover:bg-blue-50/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1877F2] text-white flex items-center justify-center">
                        <FacebookIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#171717] group-hover:text-[#1877F2]">Facebook</p>
                        <p className="text-xs text-[#626262]">Zahraffa Rental Mobil</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#1877F2] font-semibold">Kunjungi &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E8E4DB] p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl font-bold text-[#171717] mb-2">
                  Kirim Pesan / Permintaan Booking
                </h2>
                <p className="text-xs sm:text-sm text-[#626262] mb-6">
                  Isi formulir di bawah ini atau langsung hubungi kami via WhatsApp untuk respon cepat dalam hitungan menit.
                </p>

                <form
                  name="contact"
                  method="POST"
                  action="https://wa.me/6285349166234"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#171717] mb-1.5">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Contoh: Bpk. Ahmad"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E8E4DB] bg-[#FBFAF7] focus:bg-white focus:border-[#B8892E] focus:outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#171717] mb-1.5">
                        Nomor WhatsApp / HP
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E8E4DB] bg-[#FBFAF7] focus:bg-white focus:border-[#B8892E] focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Pilihan Armada / Jenis Layanan
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E8E4DB] bg-[#FBFAF7] focus:bg-white focus:border-[#B8892E] focus:outline-none transition-all"
                    >
                      <option value="Toyota Hiace Commuter">Toyota Hiace Commuter (16 Seat)</option>
                      <option value="Toyota Hiace Premio">Toyota Hiace Premio Luxury</option>
                      <option value="Toyota Innova Reborn">Toyota Innova Reborn</option>
                      <option value="Toyota Innova Zenix">Toyota Innova Zenix</option>
                      <option value="Toyota All New Avanza">Toyota All New Avanza</option>
                      <option value="Toyota Grand Avanza">Toyota Grand Avanza</option>
                      <option value="Toyota Fortuner GR Sport">Toyota Fortuner GR Sport</option>
                      <option value="Toyota Alphard Transformer">Toyota Alphard Transformer</option>
                      <option value="Antar Jemput Bandara">Antar Jemput Bandara Syamsudin Noor</option>
                      <option value="Lainnya">Lainnya / Carter Khusus</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Detail Perjalanan / Kebutuhan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Jelaskan tanggal sewa, rute tujuan, serta durasi sewa..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E8E4DB] bg-[#FBFAF7] focus:bg-white focus:border-[#B8892E] focus:outline-none transition-all"
                      required
                    />
                  </div>

                  <a
                    href="https://wa.me/6285349166234?text=Halo+Zahraffa+Rental+Mobil,+saya+ingin+booking+sewa+mobil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#B8892E] hover:bg-[#9E7424] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan via WhatsApp (+62 853-4916-6234)
                  </a>
                </form>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="flex flex-wrap items-center justify-between pb-3 mb-6 border-b border-[#E8E4DB] gap-3">
              <div>
                <h2 className="text-xl font-bold text-[#171717]">Lokasi Garasi Kami</h2>
                <p className="text-xs text-[#626262]">Home Zahraffa Rental Mobil di Google Maps</p>
              </div>
              <a
                href="https://maps.app.goo.gl/yC66naVpd1xchSg1A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B8892E] hover:text-[#9E7424] hover:underline"
              >
                Buka di Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E8E4DB] shadow-md bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5298!2d114.6745279!3d-3.401417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de427cedb877d03%3A0xc4decb64c249efb9!2sHome%20Zahraffa%20Rental%20Mobil!5e0!3m2!1sid!2sid!4v1727928000000!5m2!1sid!2sid"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={false}
                title="Lokasi Home Zahraffa Rental Mobil di Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
