/**
 * Wedding Wings Marriage Bureau
 * Interactive Script: Filters, WhatsApp Biodata Generation, Accordion, Mobile Menu
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    });

    // Close menu when clicking link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      });
    });
  }

  // 2. Proposal Catalog Filters
  const filterButtons = document.querySelectorAll('#proposalFilters .filter-btn');
  const proposalCards = document.querySelectorAll('#proposalsContainer .proposal-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-maroon-800', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-700');
      });

      // Add active to current
      btn.classList.add('active', 'bg-maroon-800', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-700');

      const filterValue = btn.getAttribute('data-filter');

      proposalCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  // 3. FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll('#faqAccordion .faq-btn');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      const isExpanded = !content.classList.contains('hidden');

      // Close all other FAQs
      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.nextElementSibling.classList.add('hidden');
          const otherIcon = otherBtn.querySelector('i');
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180');
          }
        }
      });

      // Toggle current
      if (isExpanded) {
        content.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // 4. Bio-Data Form WhatsApp Dispatcher
  const biodataForm = document.getElementById('biodataForm');

  if (biodataForm) {
    biodataForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const profileFor = document.getElementById('profileFor').value.trim();
      const candidateName = document.getElementById('candidateName').value.trim();
      const submittedBy = document.getElementById('submittedBy').value.trim();
      const candidateAge = document.getElementById('candidateAge').value.trim();
      const candidateHeight = document.getElementById('candidateHeight').value.trim();
      const maritalStatus = document.getElementById('maritalStatus').value.trim();
      const sectConfirmed = document.getElementById('sectConfirmed').value.trim();
      const education = document.getElementById('education').value.trim();
      const occupation = document.getElementById('occupation').value.trim();
      const location = document.getElementById('location').value.trim();
      const casteClan = document.getElementById('casteClan').value.trim() || 'Respectable Sunni Family';
      const rishtaPlan = document.getElementById('rishtaPlan').value.trim();
      const expectations = document.getElementById('expectations').value.trim();
      const contactWhatsApp = document.getElementById('contactWhatsApp').value.trim();

      // Format WhatsApp Message
      const message = 
`*BISMILLAH-IR-RAHMAN-IR-RAHEEM*
*WEDDING WINGS MARRIAGE BUREAU (SINCE 2013)*
*NEW MATRIMONIAL REGISTRATION*
----------------------------------------
*Candidate:* ${candidateName} (${profileFor})
*Submitted By:* ${submittedBy}
*Age / Height:* ${candidateAge} Years | ${candidateHeight}
*Marital Status:* ${maritalStatus}
*Sect / Maslak:* ${sectConfirmed}
*Education / Degree:* ${education}
*Profession:* ${occupation}
*Current City / Country:* ${location}
*Family / Caste / Clan:* ${casteClan}
*Selected Plan:* ${rishtaPlan}
*Partner Requirements:* ${expectations}
*Contact WhatsApp:* ${contactWhatsApp}
----------------------------------------
Assalam-o-Alaikum Ms. Salma Kanwal (Ms. Kanwal), I am submitting this matrimonial profile for registration with Wedding Wings Marriage Bureau. Please review and share suitable Sunni proposals.`;

      // Target WhatsApp Number: 03121801877 -> +92 312 1801877
      const whatsappURL = `https://wa.me/923121801877?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');

      // Visual confirmation feedback
      alert('Your biodata has been formatted! Opening WhatsApp to send directly to Ms. Salma Kanwal at Wedding Wings Marriage Bureau (03121801877).');
    });
  }

  // 5. Header scroll shadow
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('shadow-md', 'py-1');
    } else {
      header.classList.remove('shadow-md', 'py-1');
    }
  });

});
