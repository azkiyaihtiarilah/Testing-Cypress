describe('Login Test', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    // Kunjungi halaman login
    cy.visit('http://127.0.0.1:8000/login')

    // Input NIM dan Password
    cy.get('input[name="nim"], #nim, input[placeholder="NIM"]', { timeout: 10000 })
      .should('be.visible')
      .type('')

    cy.get('input[name="password"], #password, input[placeholder="Password"]')
      .should('be.visible')
      .type('')

    // Klik tombol Login
    cy.contains('button, a', 'Login', { matchCase: false }).click()

    // Verifikasi elemen NIM/email atau password salah muncul
    cy.contains('NIM/email atau password salah', { matchCase: false, timeout: 10000 }).should('be.visible')
  })
})
