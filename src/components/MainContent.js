export default function MainContent() {
  return (
    <div class="w-full md:w-4/5 bg-gray-100">
      <div class="container bg-gray-100 pt-2 px-6">
        {/* Profile card */}
        {/*    <!--
  This component uses @tailwindcss/aspect-ratio

  yarn add @tailwindcss/aspect-ratio
  npm install @tailwindcss/aspect-ratio

  plugins: [require('@tailwindcss/aspect-ratio')]
--> */}

        <div class="max-w-8xl px-4 mx-auto">
          <section class="p-8 bg-gray-100 rounded-lg mx-2">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <div class="relative">
                <div class="aspect-w-1 aspect-h-1">
                  <img
                    src="https://www.hyperui.dev/photos/man-5.jpeg"
                    alt=""
                    class="object-cover rounded-lg"
                  />
                </div>

                <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                  <span class="inline-block w-12 h-10 bg-gray-100 rounded-lg"></span>
                </div>
              </div>

              <blockquote class="sm:col-span-2">
                <p class="text-xl font-medium sm:text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  perspiciatis cumque neque ut nobis excepturi, quasi iure
                  quisquam autem alias.
                </p>

                <cite class="inline-flex items-center mt-8 not-italic">
                  <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <p class="text-sm text-gray-500 uppercase sm:ml-3">
                    <strong>James Boyle</strong>, Fullstack Developer
                  </p>
                </cite>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
