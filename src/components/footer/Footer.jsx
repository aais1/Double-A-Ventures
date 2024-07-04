import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">About Us</h3>
                    <p className="text-sm">Dont hesitate to reach out to us for any of you queries or if you need any help regarding the purchase or return of a product </p>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <p className="text-sm">123 Main Street, Abbottabad, Pakistan</p>
                    <p className="text-sm">doubleAventures@gmail.com</p>
                    <p className="text-sm">+92 3456789010</p>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 9H15.5C15.22 9 15 9.22 15 9.5V11H17V12H15V16H13V12H11V11H13V9.5C13 8.12 14.12 7 15.5 7H17V9ZM12 9H11V11H12V9ZM7 9.5C7 8.12 8.12 7 9.5 7H11V9H9.5C9.22 9 9 9.22 9 9.5V11H7V9.5ZM7 13V17H9V13H7ZM11 13V17H13V13H11ZM17 13H15V15H17V13Z" />
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 9H15.5C15.22 9 15 9.22 15 9.5V11H17V12H15V16H13V12H11V11H13V9.5C13 8.12 14.12 7 15.5 7H17V9ZM12 9H11V11H12V9ZM7 9.5C7 8.12 8.12 7 9.5 7H11V9H9.5C9.22 9 9 9.22 9 9.5V11H7V9.5ZM7 13V17H9V13H7ZM11 13V17H13V13H11ZM17 13H15V15H17V13Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;