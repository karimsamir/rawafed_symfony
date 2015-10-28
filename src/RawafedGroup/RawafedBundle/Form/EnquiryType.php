<?php

// src/Blogger/BlogBundle/Form/EnquiryType.php

namespace RawafedGroup\RawafedBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class EnquiryType extends AbstractType {

    public function buildForm(FormBuilderInterface $builder, array $options) {


        $builder->add("name", "text", array(
            "label" => "Enter your Name:"
        ));
//        $builder->add('email', 'email');
        $builder->add("email", "email", array(
            "label" => "E-mail address:"
        ));

        $builder->add("subject", "text", array(
            "label" => " Subject:"
        ));

        $builder->add("message", "textarea", array(
            "label" => " Enter your Message:"
        ));
    }

    public function getDefaultOptions(array $options) {

        $options = parent::getDefaultOptions($options);
        $options['csrf_protection'] = false;

        return $options;
    }

    public function getName() {
        return 'contactus';
    }

}