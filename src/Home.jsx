import React from 'react'

function Home() {
  return (
    <div>

        <section id="features" class="py-5">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-4">
                        <i class="bi bi-speedometer2 fs-1 text-primary"></i>
                        <h3>Fast</h3>
                        <p>Our services are optimized for speed and efficiency.</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-shield-check fs-1 text-primary"></i>
                        <h3>Secure</h3>
                        <p>We prioritize the security of your data.</p>
                    </div>
                    <div class="col-md-4">
                        <i class="bi bi-stars fs-1 text-primary"></i>
                        <h3>Reliable</h3>
                        <p>Dependable services you can count on.</p>
                    </div>
                </div>
            </div>
        </section>


        <footer class="bg-dark text-white text-center py-3">
            <div class="container">
                <p>&copy; 2024 BrandName. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default Home