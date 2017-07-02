import { LeaveApprovalPage } from './app.po';

describe('leave-approval App', () => {
  let page: LeaveApprovalPage;

  beforeEach(() => {
    page = new LeaveApprovalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
