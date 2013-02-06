<?php

/**
 * @category   Kega
 * @package    Kega_Init
 */
class Kega_Init_Model_Observer
{
    /**
     * Observers controller_action_predispatch_adminhtml_targetrule_save
     * Increases the php memory limit for the triggeree
     *
     * @param  Varien_Event_Observer  $observer array('mode' => $this)
     * @return void
     */
    public function setMemoryLimit()
    {
        ini_set("memory_limit","2048M");
        return $this;
    }
}