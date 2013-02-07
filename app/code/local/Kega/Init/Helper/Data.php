<?php
    /**
     * Kega Init data helper
     *
     * @package    Kega Init
     */
class Kega_Init_Helper_Data extends Mage_Core_Helper_Abstract
{
    const XML_STORE_CATEGORY_ID = 'extrasettings/store_settings/store_category_id';

    public function getStoreCategoryId()
    {
        return Mage::getStoreConfig(self::XML_STORE_CATEGORY_ID);
    }
}