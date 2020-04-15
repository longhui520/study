import java.util.logging.Level;
import java.util.logging.Logger;

public class LoggingClass {
    public static void main(String[] args) {
        Logger logger = Logger.getGlobal();
        logger.info("start process");
        logger.warning("memory is running out");
        logger.fine("ingroned");
        logger.severe("process will be terminated");
    }
}