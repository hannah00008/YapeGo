import React from "react";
export default function Testimonios() {

  const users = ["Javier","María","Luis","Ana"];

  return (
    <section className="px-10 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Testimonios
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {users.map((user,i)=>(
          <div key={i}
            className="bg-white p-5 rounded-xl shadow">

            <div className="w-12 h-12 bg-purple-400 rounded-full mb-3"></div>

            <h3 className="font-bold">{user}</h3>

            <p className="text-sm text-gray-500">
              "Una gran experiencia para crecer profesionalmente."
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}