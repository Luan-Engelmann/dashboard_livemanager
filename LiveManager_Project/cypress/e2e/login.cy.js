describe('Troia Analytics - Testes de Login (E2E)', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('LOGIN-001 - Login com credenciais válidas', () => {
    cy.get('[data-testid="username"]').clear().type('admin');
    cy.get('[data-testid="password"]').clear().type('admin');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('LOGIN-002 - Senha inválida deve impedir login', () => {
    cy.get('[data-testid="username"]').clear().type('admin');
    cy.get('[data-testid="password"]').clear().type('senhaerrada');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/login');
  });

  it('LOGIN-003 - Usuário inválido deve impedir login', () => {
    cy.get('[data-testid="username"]').clear().type('usuarioinvalido');
    cy.get('[data-testid="password"]').clear().type('admin');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/login');
  });

  it('LOGIN-004 - Campos vazios devem impedir envio', () => {
    cy.get('[data-testid="username"]').clear();
    cy.get('[data-testid="password"]').clear();
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/login');
  });

  it('LOGIN-005 - Mostrar e ocultar senha', () => {
    cy.get('[data-testid="password"]').clear().type('minhasenha');
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'password');
    
    cy.get('[data-testid="toggle-password"]').click();
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'text');
    
    cy.get('[data-testid="toggle-password"]').click();
    cy.get('[data-testid="password"]').should('have.attr', 'type', 'password');
  });

  it('LOGIN-006 - Manter conectado', () => {
    cy.get('[data-testid="remember-me"]').as('checkbox');
    cy.get('@checkbox').click();
    cy.get('@checkbox').click();
  });

  it('LOGIN-007 - Logout', () => {
    cy.get('[data-testid="username"]').clear().type('admin');
    cy.get('[data-testid="password"]').clear().type('admin');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/dashboard');

    cy.visit('/dashboard/configuracoes');
    cy.get('[data-testid="logout-button"]').click();
    cy.url().should('include', '/login');
  });

  it('LOGIN-008 - Proteção da rota /dashboard', () => {
    cy.clearLocalStorage();
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });

it('LOGIN-009 - Responsividade no mobile (390x844 e 360x800)', () => {
    // Teste viewport mobile (390x844)
    cy.viewport(390, 844);
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').scrollIntoView().should('be.visible');
    cy.window().then((win) => {
      expect(win.document.documentElement.scrollWidth).to.equal(win.document.documentElement.clientWidth);
    });

    // Teste viewport 360x800
    cy.viewport(360, 800);
    cy.get('[data-testid="login-button"]').scrollIntoView().should('be.visible');
    cy.window().then((win) => {
      expect(win.document.documentElement.scrollWidth).to.equal(win.document.documentElement.clientWidth);
    });
  });
});