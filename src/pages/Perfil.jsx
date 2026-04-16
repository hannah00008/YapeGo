import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Perfil() {
  return (
    <div className="min-h-screen pt-32 px-6 text-center">
      <h1 className="text-4xl font-black">
        Bienvenida a tu Perfil 🎉
      </h1>
    </div>
  );
}