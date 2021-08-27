import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('I can choose the middle square', async ()=> { 
    let table = await(await driver).findElement(By.id("cell-4"));
    await table.click(); 
    await (await driver).sleep(5000);
})

test('I can choose the upper left square', async()=> { 
    let table = await(await driver).findElement(By.id('cell-0'));
    await table.click();
    await( await driver).sleep(5000);
})

test('I can choose the bottom right square', async()=> { 
    let table= await(await driver).findElement(By.id('cell-8'));
    await table.click(); 
    await( await driver).sleep(2000);
})

test('The opponet will add a cirlce', async()=> { 
    let table = await(await driver).findElement(By.id('game-board'))
    await table.click()
    await( await driver).sleep(2000);

})