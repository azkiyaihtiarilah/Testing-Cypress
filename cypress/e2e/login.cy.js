describe('Login Test', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    // Kunjungi halaman login
    cy.visit('http://127.0.0.1:8000/login')

    // Input NIM dan Password
    cy.get('input[name="nim"], #nim, input[placeholder="NIM"]', { timeout: 10000 })
      .should('be.visible')
      .type('2341760175')

    cy.get('input[name="password"], #password, input[placeholder="Password"]')
      .should('be.visible')
      .type('12345678')

    // Klik tombol Login
    cy.contains('button, a', 'Login', { matchCase: false }).click()

    // Tunggu hingga redirect selesai
    cy.url({ timeout: 15000 }).should('include', '/dashboard')

    // Verifikasi elemen pada dashboard muncul
    cy.contains('Available TOEIC Test', { matchCase: false, timeout: 10000 }).should('be.visible')
  })
})
