

import Content from "../../libreries/components/Content";

export default function Home() {


  return (
    <div className="flex min-h-screen flex-col font-sans bg-background mode:bg-black">
      
      {/* Main layout container */}
      <main className="flex-1 w-full">
        <section
          className="
            container mx-auto 
            flex flex-col md:flex-row 
            items-center justify-between 
            gap-12 
            px-6 sm:px-8 lg:px-12 
            py-24 sm:py-32 lg:py-40
          "
        >
          <Content />
          print
        </section>
      </main>


    </div>
  );
}
