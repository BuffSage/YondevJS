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

<main class="container py-4">
  <h2 class="mb-4 border-bottom border-3 border-tertiary pb-2" style="border-color:#ffcf40 !important;">
    Our Services
  </h2>

  <div class="row g-4">
    <div class="col-md-4">
      <div class="card h-100">
        <img src="/assets/images/service1.jpg" class="card-img-top" alt="Service 1" />
        <div class="card-body">
          <h5 class="card-title">Business Consulting</h5>
          <p>Expert advice to help your business grow effectively.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <img src="/assets/images/service1.jpg" class="card-img-top" alt="Service 2" />
        <div class="card-body">
          <h5 class="card-title">Project Management</h5>
          <p>Tools and support for managing your projects smoothly.</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card h-100">
        <img src="/assets/images/service1.jpg" class="card-img-top" alt="Service 3" />
        <div class="card-body">
          <h5 class="card-title">Custom Software</h5>
          <p>Custom software development tailored to your business needs.</p>
        </div>
      </div>
    </div>
  </div>
</main>

<footer class="site-footer">
  <p>&copy; ${new Date().getFullYear()} YonDev. All rights reserved.</p>
</footer>
`;
