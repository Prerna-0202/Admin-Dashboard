import Link from 'next/link';

const AdminDashboard = () => {

    return (
        <div id="wrapper" class="grid grid-cols-1 xl:grid-cols-2 xl:h-screen">
        <div id="col-1" class="bg-blue-900 px-12 pt-32 pb-40 md:px-32 xl:py-64 xl:px-32">
            <h1 class="text-blue-500 font-extrabold text-4xl md:text-6xl">
              Admin <br/>
              Dashboard <br/>
            </h1>
            <p class="text-white text-normal md:text-3xl pt-3 md:pt-6 font-medium mb-4">Lorem ipsum dolor sit amet.</p>
          <Link href="/home" className="font-bold text-blue-500 bg-white px-4 py-2 rounded-md">Get Started </Link>
        </div>

        <div id="col-2" class="px-3 md:px-20 xl:py-64 xl:px-12">

            <div id="cards" class="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 -mt-6 bg-white xl:-ml-24 xl:pl-8 xl:rounded-xl">
                <div id="circle" class="w-8 h-8 bg-blue-500 md:w-16 md:h-16 rounded-full"></div>
                <p class="pl-4 md:pl-12 text-base pt-1 font-semibold md:text-2xl md:pt-4">Your Admin Dashboard</p>
            </div>

            <div id="cards" class="rounded-lg flex border py-5 px-6 md:py-8 md:px-16 mt-6 md:mt-12 bg-white xl:pl-8 xl:rounded-xl">
                <div id="circle" class="w-8 h-8 bg-blue-500 md:w-16 md:h-16 rounded-full"></div>
                <p class="pl-4 md:pl-12 text-base pt-1 font-semibold md:text-2xl md:pt-4">Your Command Center</p>
            </div>

        </div>
    </div>
    );
};

export default AdminDashboard;
