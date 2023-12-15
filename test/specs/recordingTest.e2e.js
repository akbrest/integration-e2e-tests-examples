describe('Recording 12.12.2023 at 00:39:46', () => {
  it('tests Recording 12.12.2023 at 00:39:46', async () => {
    await browser.setWindowSize(1920, 1273);

    await browser.url('http://localhost:3000/');
    await expect(browser).toHaveUrl('http://localhost:3000/');
    await browser.pause(2000);

    await browser.$('aria/Api Example').click();
    await expect(browser).toHaveUrl('http://localhost:3000/api-example');
    await browser.pause(2000);

    await browser.$('aria/qui est esse').click();
    await expect(browser).toHaveUrl('http://localhost:3000/api-example/2');
    await browser.pause(2000);
  });
});
