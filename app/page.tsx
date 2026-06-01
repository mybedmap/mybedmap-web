export default function Home() {
  return (
    <main className="min-h-screen bg-[#08040f] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            MyBedMap
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#como-funciona" className="hover:text-white">
              Cómo funciona
            </a>
            <a href="#perfil" className="hover:text-white">
              Perfil sexual
            </a>
            <a href="#privacidad" className="hover:text-white">
              Privacidad
            </a>
          </nav>

          <a
            href="/login"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white/40 hover:bg-white/10"
          >
            Entrar
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-20 md:grid-cols-[1.05fr_0.95fr]">
          <section>
            <div className="mb-6 inline-flex rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100">
              Mapa íntimo · Compatibilidad · Deseo real
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              Descubre tu mapa sexual.
              <span className="block bg-gradient-to-r from-fuchsia-300 via-pink-200 to-orange-200 bg-clip-text text-transparent">
                Encuentra compatibilidad real.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              MyBedMap crea un perfil sexual basado en tus gustos, deseos,
              límites, fantasías y estilo íntimo. No se trata de encajar en una
              etiqueta: se trata de entender qué te mueve y con quién podrías
              conectar de verdad.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/login"
                className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-[#08040f] transition hover:bg-white/90"
              >
                Crear mi perfil
              </a>

              <a
                href="#como-funciona"
                className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Ver cómo funciona
              </a>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-fuchsia-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#12091d] p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Tu perfil</p>
                  <h2 className="text-2xl font-semibold">Mapa sexual</h2>
                </div>
                <div className="rounded-full bg-fuchsia-400/15 px-4 py-2 text-sm text-fuchsia-100">
                  0% completado
                </div>
              </div>

              <div className="space-y-4">
                <ProfileRow label="Deseo y libido" value="Pendiente" />
                <ProfileRow label="Estilo sexual" value="Pendiente" />
                <ProfileRow label="Sexo oral" value="Pendiente" />
                <ProfileRow label="BDSM y control" value="Pendiente" />
                <ProfileRow label="Fantasías" value="Pendiente" />
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-medium text-white/90">
                  Tus afinidades aparecerán aquí
                </p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Cuando completes los bloques, verás tus tendencias principales,
                  tus zonas de mayor deseo y tus compatibilidades más fuertes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        id="como-funciona"
        className="border-t border-white/10 bg-[#0d0617] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Cómo funciona
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <InfoCard
              number="01"
              title="Responde por bloques"
              text="Cada bloque analiza una parte de tu vida sexual: deseo, prácticas, fantasías, límites, cuerpo, comunicación y compatibilidad."
            />
            <InfoCard
              number="02"
              title="Crea tu mapa"
              text="Tus respuestas construyen un perfil dinámico que podrás editar con el tiempo. Tus gustos pueden cambiar, y tu mapa también."
            />
            <InfoCard
              number="03"
              title="Cruza afinidades"
              text="El sistema compara deseos compatibles, límites y prioridades para detectar personas con una conexión sexual real."
            />
          </div>
        </div>
      </section>

      <section
        id="perfil"
        className="border-t border-white/10 bg-[#08040f] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Mucho más que un test
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            MyBedMap no fuerza respuestas únicas. Una misma variable puede tener
            varios roles: lo que te gusta hacer, lo que te gusta recibir, lo que
            fantaseas, lo que te da curiosidad o lo que nunca aceptarías.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <FeatureCard title="Deseo">
              Cuánto te excita una práctica, dinámica o escenario.
            </FeatureCard>
            <FeatureCard title="Prioridad">
              Cuánto pesa esa variable en tu compatibilidad con otra persona.
            </FeatureCard>
            <FeatureCard title="Límites">
              Qué prácticas son líneas rojas y no deben cruzarse.
            </FeatureCard>
            <FeatureCard title="Ramas inteligentes">
              El test se adapta a tu perfil base, orientación, anatomías que te
              atraen y apertura a terceros.
            </FeatureCard>
          </div>
        </div>
      </section>

      <section
        id="privacidad"
        className="border-t border-white/10 bg-[#0d0617] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Privado desde el principio
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            Tú decides si solo quieres crear tu perfil, aparecer únicamente ante
            personas muy compatibles o activar un modo más visible. La privacidad
            no es un extra: es parte central del producto.
          </p>
        </div>
      </section>
    </main>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="text-sm text-white/75">{label}</span>
      <span className="text-sm text-white/45">{value}</span>
    </div>
  );
}

function InfoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-5 text-sm font-semibold text-fuchsia-200">
        {number}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-white/60">{text}</p>
    </article>
  );
}

function FeatureCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-white/60">{children}</p>
    </article>
  );
}