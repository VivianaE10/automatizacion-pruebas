
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

class ProductFormTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")
        self.wait = WebDriverWait(self.driver, 10)

    def tearDown(self):
        self.driver.quit()

    def test_formulario_carga_correctamente(self):
        title = self.driver.find_element(
            By.TAG_NAME, "h1"
        ).text

        self.assertEqual(title, "Registro de productos")

    def test_nombre_obligatorio(self):
        self.driver.find_element(
            By.ID, "name"
        ).send_keys("")

        self.driver.find_element(
            By.CSS_SELECTOR, "button[type='submit']"
        ).click()

        message = self.driver.find_element(
            By.ID, "message"
        ).text

        self.assertEqual(
            message,
            "El nombre del producto es obligatorio."
        )

    def test_registro_producto_exitoso(self):
        self.driver.find_element(
            By.ID, "name"
        ).send_keys("Producto Selenium")

        self.driver.find_element(
            By.ID, "description"
        ).send_keys("Producto registrado mediante una prueba automatizada")

        self.driver.find_element(
            By.ID, "price"
        ).send_keys("30000")

        self.driver.find_element(
            By.ID, "category"
        ).send_keys("Pruebas")

        self.driver.find_element(
            By.CSS_SELECTOR, "button[type='submit']"
        ).click()

        self.wait.until(
            lambda driver: "Producto registrado correctamente."
            in driver.find_element(By.ID, "message").text
        )

        message = self.driver.find_element(
            By.ID, "message"
        ).text

        self.assertEqual(
            message,
            "Producto registrado correctamente."
        )

        product_list = self.driver.find_element(
            By.ID, "productList"
        ).text

        self.assertIn("Producto Selenium", product_list)


if __name__ == "__main__":
    unittest.main(verbosity=2)
