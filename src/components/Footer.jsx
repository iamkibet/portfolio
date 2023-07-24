import { logo } from "../assets";

function Footer() {
    return (
      <>
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="http://iamkibet.com/" class="flex items-center mb-4 sm:mb-0">
            <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
          &nbsp; Dennis &nbsp;
            <span className="sm:block hidden"> | &nbsp; Kibet </span>
          </p>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">My Projects</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Random Stuff</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact Me</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="http://iamkibet.com/" class="hover:underline">DennisKibet™</a>. All Rights Reserved.</span>
    </div>
</footer>
      </>
    );
  }
  
  export default Footer;