// SEN0465 - Extension MakeCode
// Capteur d'oxygène O2

//% color="#0A7E8C" icon="\uf2db"
//% block="SEN0465"
namespace SEN0465 {

    let adresseI2C = 0x75

    /**
     * Initialise le capteur SEN0465
     */
    //% block="SEN0465 initialiser"
    //% weight=100
    export function initialiser(): void {
        // Initialisation I2C
        pins.i2cWriteNumber(
            adresseI2C,
            0,
            NumberFormat.UInt8BE,
            false
        )
    }

    /**
     * Lit la concentration en oxygène
     */
    //% block="SEN0465 lire O2 (%)"
    //% weight=90
    export function lireO2(): number {
        // Valeur temporaire
        // La véritable commande I2C sera ajoutée après vérification
        return 0
    }
}
