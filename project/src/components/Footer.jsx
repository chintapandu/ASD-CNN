function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ASD Screening</h3>
            <p className="text-gray-300">Supporting Early Detection and Intervention</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/analysis" className="text-gray-300 hover:text-white">Image Analysis</a></li>
              <li><a href="/risk-and-symptoms" className="text-gray-300 hover:text-white">Risk & Symptoms</a></li>
              <li><a href="/food-recommendations" className="text-gray-300 hover:text-white">Health Guide</a></li>
              <li><a href="/stories" className="text-gray-300 hover:text-white">Patient Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">support@asdscreening.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} ASD Screening. All rights reserved by MALI.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;