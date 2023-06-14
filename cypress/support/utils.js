export function uuid() {
    return 'xxxxxxxx'.replace(/[x]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
}

export const TESTMAIL = `cypress-test-${uuid()}@test.com`
export const AUTOMATION_EXERCISE = 'Automation Exercise'
export const URL_AUTOMATION_EXERCISE = 'www.automationexercise.com'
