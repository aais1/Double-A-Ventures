import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">About Us</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis, sapien non aliquet feugiat, mauris massa tincidunt enim.</p>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <p className="text-sm">123 Main Street, City, Country</p>
                    <p className="text-sm">info@example.com</p>
                    <p className="text-sm">+1 234 567 890</p>
                </div>
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 10.5H13.5C13.22 10.5 13 10.72 13 11V13H15.5C15.78 13 16 12.78 16 12.5V11C16 10.72 15.78 10.5 15.5 10.5ZM12 10.5C11.72 10.5 11.5 10.72 11.5 11V13H14V11C14 10.72 13.78 10.5 13.5 10.5H12ZM10.5 10.5H8.5C8.22 10.5 8 10.72 8 11V13H10.5C10.78 13 11 12.78 11 12.5V11C11 10.72 10.78 10.5 10.5 10.5ZM7 11C7 10.72 6.78 10.5 6.5 10.5H5V12.5H6.5C6.78 12.5 7 12.28 7 12V11ZM17 11C17 10.72 16.78 10.5 16.5 10.5H15V12.5H16.5C16.78 12.5 17 12.28 17 12V11Z" />
                            </svg>
                        </a>
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