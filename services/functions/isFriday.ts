export async function main() {
  return {
    statusCode: 200,
    body: new Date().getDay() === 5
  };
}
