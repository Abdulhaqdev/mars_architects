"use client";

import { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Validate email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Пожалуйста, заполните все поля.");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Пожалуйста, введите действительный адрес электронной почты.");
      setLoading(false);
      return;
    }

    try {
      // Send data to API
      const response = await axios.post("https://api.mars-architects.us/contacts/send/", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      // Handle success
      setSuccess("Сообщение успешно отправлено! Мы свяжемся с вами скоро.");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (err) {
      // Handle error
      setError("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#101420] py-12 lg:py-24 xl:py-24" id='contacts'>
      <div className="max-w-6xl mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 xl:gap-24">
        <div className="flex flex-col mx-auto gap-4 min-w-[300px]">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl text-white">
              Связаться с нами
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed dark:text-gray-400">
              Есть вопросы? Хотите узнать больше о нашей продукции? Напишите нам, используя форму ниже, и мы свяжемся с вами как можно скорее.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name" className="text-sm text-white">
                Имя
              </Label>
              <Input
                id="name"
                placeholder="Введите свое имя"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 text-white border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone" className="text-sm text-white">
                Номер телефона
              </Label>
              <Input
                id="phone"
                placeholder="Введите свой номер телефона"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800 text-white border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email" className="text-sm text-white">
                Электронная почта
              </Label>
              <Input
                id="email"
                placeholder="Введите свой адрес электронной почты"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 text-white border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message" className="text-sm text-white">
                Сообщение
              </Label>
              <Textarea
                id="message"
                placeholder="Введите ваше сообщение"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px] resize-none bg-gray-800 text-white border-gray-600"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
            <Button size="lg" disabled={loading}>
              {loading ? "Отправка..." : "Представлять на рассмотрение"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}