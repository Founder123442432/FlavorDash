import { useEffect, useState } from "react";

export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-[#213343] pt-12 pb-4 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
            Quick Links
          </h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Our Story
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Newsroom
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
            Services
          </h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Get Help
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Buy gift cards
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Add your restaurant
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Promotions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
            Platforms
          </h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Hubspot
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Marketo Integration Services
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Marketing Glossary
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                UIPath
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Accessibility
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
        <p className="text-gray-300 text-[15px]">
          © FlavorDash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
