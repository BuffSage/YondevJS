document.body.innerHTML = `
<header class="site-header">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<!-- Hero Section -->
<section class="hero">
  <img src="/src/assets/images/ProustFP-min.jpg" alt="Hero image" class="hero-img" />
  <div class="hero-content">
    <h1><b>Reclaim Your Time with Yondev</b></h1>
    <a href="/services" class="btn-tertiary">Explore Services</a>
  </div>
</section>

<main class="container py-4"></main>

<!-- Section 1 -->
<section style="background-color: #FFFFFF; padding: 3rem 1rem;">
  <div style="display: flex; flex-wrap: wrap; align-items: right; max-width: 1200px; margin: auto;">
    
    <div style="flex: 1 1 75%; padding-right: 2rem;">
      <h3 style="border-bottom: 3px solid #ffcf40; padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Curate A Better Workflow</h3>
      <p style="font-size: 1.1rem; color: #000000;">
        At YonDev, we streamline your business operations with smart organisation tools that save time and reduce stress.
        <br><br>
        Focus on your mission. We'll handle the digital housekeeping.
      </p>
    </div>

    <div style="flex: 1 1 40%; text-align: center;">
      <img src="/src/assets/images/TimeFrontKennyEliason-min.jpg" alt="Business Rewind" style="max-height: 250px; width: auto; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);" />
    </div>
  
  </div>
</section>


<!-- Section 2 -->
<section class="py-5 section-tertiary">
  <div class="container">
    <h3 class="mb-4 border-bottom border-3 border-warning pb-2">Past Projects</h3>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/src/assets/images/project1.jpg" class="card-img-top" alt="Project 1" />
          <div class="card-body">
            <h5 class="card-title">Project Alpha</h5>
            <p class="card-text text-secondary-custom">A full-stack web app that boosted client productivity by 30%.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/src/assets/images/project2.jpg" class="card-img-top" alt="Project 2" />
          <div class="card-body">
            <h5 class="card-title">Project Beta</h5>
            <p class="card-text text-secondary-custom">E-commerce platform built with scalability and security in mind.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/src/assets/images/project3.jpg" class="card-img-top" alt="Project 3" />
          <div class="card-body">
            <h5 class="card-title">Project Gamma</h5>
            <p class="card-text text-secondary-custom">Custom CRM tool tailored for small businesses.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 3 -->
<section class="container py-5 bg-secondary-custom text-center">
  <h3 class="mb-4 border-bottom border-3 border-warning pb-2">Ready to Bridge Better?</h3>
  <p class="text-secondary-custom fs-5 mb-4">
    Contact us today to learn how YonDev can transform your business operations and save you time.
  </p>
  <a href="/contact" class="btn btn-tertiary">Get in Touch</a>
</section>

<footer class="site-footer">
  <p>&copy; ${new Date().getFullYear()} YonDev. All rights reserved.</p>
</footer>
`;
